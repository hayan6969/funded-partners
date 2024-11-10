'use client'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Footer from '@/components/footer/footer'
import Nav from '@/components/navbar/nav'
import service from '@/app/appwrite/config'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ID } from 'appwrite'

function Dashboard() {
    const userData = useSelector((state: { auth?: { userData?: {
        providerUid?: string,
        userId?: string
    } } }) => state.auth?.userData ?? { providerUid: '', userId: '' });

    const [orders, setOrders] = useState<any[]>([])
    const [profits, setProfits] = useState<any[]>([])
    const [activeAccounts, setActiveAccounts] = useState<any[]>([])
    const [newProfit, setNewProfit] = useState({
        account: '',
        amount: '',
        imageFile: null as File | null,
        imageId: '',
    })
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            if (userData?.userId) {
                await service.getOrders(userData.userId).then((result) => {
                    if (result) {
                        setOrders(result.documents);
                        const active = result.documents.filter((order: any) => order.status === 'active');
                        setActiveAccounts(active);
                    }
                });
            }
        };
        fetchOrders();
    }, [userData?.userId])

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setNewProfit(prev => ({ ...prev, imageFile: file }));
        }
    };

    const handleSaveProfit = async () => {
        if (!newProfit.imageFile) {
            console.error('No image file selected');
            return;
        }

        try {
            // Upload the image file to Appwrite storage
            const uploadedFile = await service.uploadFile(newProfit.imageFile);

            if (!uploadedFile) {
                console.error('Failed to upload image');
                return;
            }

            // Prepare the profit data with the file ID
            const profitData = {
                account: newProfit.account,
                amount: newProfit.amount,
                imageId: uploadedFile.$id, // Use the file ID returned from Appwrite
                date: new Date().toISOString(),
                userId: userData.userId,
            };

            // Here you would typically make an API call to save the profit data
            // For now, we'll just add it to the local state
            setProfits(prev => [...prev, profitData]);

            // Reset the form
            setNewProfit({ account: '', amount: '', imageFile: null, imageId: '' });
            setIsDialogOpen(false);

            // You can replace this console.log with your API call to save the profit data
            console.log('Saving profit data:', profitData);
        } catch (error) {
            console.error('Error saving profit:', error);
        }
    };

    return (
        <>
        
        <div className='min-h-screen flex flex-col'>
        <Nav />
           
            <main className='flex-grow bg-[#080808] relative overflow-hidden'>
                <div className='absolute w-96 h-96 bg-[#3305FF] bg-opacity-10 rounded-full blur-3xl -top-10 left-0'></div>
                <div className='absolute w-96 h-96 bg-[#9CF05C] bg-opacity-10 rounded-full blur-3xl top-10 -left-20'></div>
                <div className='container mx-auto py-12 relative z-10'>
                    <h1 className='text-4xl font-bold text-white mb-8'>DASHBOARD</h1>
                    <h2 className='text-xl text-white mb-8'>Welcome: {userData?.providerUid ?? 'Guest'} (User ID: {userData?.userId ?? 'N/A'})</h2>
                    
                    <div className='space-y-8'>
                        <Card className='h-[300px]'>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Profits</CardTitle>
                                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button>Add Profit</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Add New Profit</DialogTitle>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="account" className="text-right">Account</Label>
                                                <Select value={newProfit.account} onValueChange={(value) => setNewProfit(prev => ({ ...prev, account: value }))}>
                                                    <SelectTrigger className="col-span-3">
                                                        <SelectValue placeholder="Select account" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {orders.map((account: any) => (
                                                            <SelectItem key={account.email} value={account.email}>{account.email}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="amount" className="text-right">Amount</Label>
                                                <Input
                                                    id="amount"
                                                    type="number"
                                                    value={newProfit.amount}
                                                    onChange={(e) => setNewProfit(prev => ({ ...prev, amount: e.target.value }))}
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="image" className="text-right">Image</Label>
                                                <Input
                                                    id="image"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="col-span-3"
                                                />
                                            </div>
                                        </div>
                                        <Button onClick={handleSaveProfit}>Save Profit</Button>
                                    </DialogContent>
                                </Dialog>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[400px]">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Account</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Image</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {profits.map((profit, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{new Date(profit.date).toLocaleDateString()}</TableCell>
                                                    <TableCell>{profit.account}</TableCell>
                                                    <TableCell>${profit.amount}</TableCell>
                                                    <TableCell>
                                                        {profit.imageId && (
                                                            <img src={`${service.getImagePreview(profit.imageId)}`} alt="Profit" className="w-12 h-12 object-cover" />
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </ScrollArea>
                            </CardContent>
                        </Card>

                        <Card className='h-[300px]'>
                            <CardHeader>
                                <CardTitle>Orders</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[400px]">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Order ID</TableHead>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Username</TableHead>
                                                <TableHead>Plan</TableHead>
                                                <TableHead>Status</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {orders.map((order) => (
                                                <TableRow key={order.$id}>
                                                    <TableCell>{order.$id}</TableCell>
                                                    <TableCell>{order.date}</TableCell>
                                                    <TableCell>{order.username}</TableCell>
                                                    <TableCell>{order.plan}</TableCell>
                                                    <TableCell>{order.status}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
        </>
    )
}

export default Dashboard