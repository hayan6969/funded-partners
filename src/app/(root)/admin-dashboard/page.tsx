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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function AdminDashboard() {
    const userData = useSelector((state: { auth?: { userData?: {
        providerUid?: string,
        userId?: string
    } } }) => state.auth?.userData ?? { providerUid: '', userId: '' });

    const [orders, setOrders] = useState<any[]>([])
    const [profits, setProfits] = useState<any[]>([])
    const [activeTab, setActiveTab] = useState('orders')

    useEffect(() => {
        fetchOrders()
        fetchProfits()
    }, [])

    const fetchOrders = async () => {
        try {
            const result = await service.getOrders()
            if (result) {
                setOrders(result.documents)
            }
        } catch (error) {
            console.error("Error fetching orders:", error)
        }
    }

    const fetchProfits = async () => {
        try {
            // const result = await service.getProfits()
            //make a dummy result for now
            const result = {
                documents: [
                    {
                        $id: '1',
                        date: '2021-10-10',
                        account: 'Account 1',
                        amount: 100,
                        status: 'pending',
                        imageId: '1'
                    },
                    {
                        $id: '2',
                        date: '2021-10-11',
                        account: 'Account 2',
                        amount: 200,
                        status: 'approved',
                        imageId: '2'
                    },]}
            if (result) {
                setProfits(result.documents)
            }
        } catch (error) {
            console.error("Error fetching profits:", error)
        }
    }
    

    const updateOrder = async (orderId: string, status: string, email: string, password: string) => {
        try {
            await service.updateOrder(orderId, status, email, password)
            fetchOrders() // Refresh the orders after update
        } catch (error) {
            console.error("Error updating order:", error)
        }
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <Nav />
            <main className='flex-grow bg-[#080808] relative overflow-hidden'>
                <div className='absolute w-96 h-96 bg-[#3305FF] bg-opacity-10 rounded-full blur-3xl -top-10 left-0'></div>
                <div className='absolute w-96 h-96 bg-[#9CF05C] bg-opacity-10 rounded-full blur-3xl top-10 -left-20'></div>
                <div className='container mx-auto py-12 relative z-10'>
                    <h1 className='text-4xl font-bold text-white mb-8'>ADMIN DASHBOARD</h1>
                    
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="mb-4">
                            <TabsTrigger value="orders">Orders</TabsTrigger>
                            <TabsTrigger value="profits">Profit Requests</TabsTrigger>
                        </TabsList>
                        <TabsContent value="orders">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Orders</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[600px]">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Order ID</TableHead>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Username</TableHead>
                                                    <TableHead>Plan</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Email</TableHead>
                                                    <TableHead>Password</TableHead>
                                                    <TableHead>Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {orders.map((order) => (
                                                    
                                                    <TableRow key={order.$id}>
                                                        <TableCell>{order.$id}</TableCell>
                                                        <TableCell>{order.date}</TableCell>
                                                        <TableCell>{order.username}</TableCell>
                                                        <TableCell>{order.plan}</TableCell>
                                                        <TableCell>
                                                            <Select
                                                                value={order.status}
                                                                onValueChange={(value) => updateOrder(order.$id, value, order.email || '', order.password || '')}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue>{order.status}</SelectValue>
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="pending">Pending</SelectItem>
                                                                    <SelectItem value="active">Active</SelectItem>
                                                                    <SelectItem value="not approved">Not Approved</SelectItem>
                                                                    <SelectItem value="disabled">Disabled</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Input
                                                                type="email"
                                                                placeholder="Email"
                                                                value={order.email || ''}
                                                                onChange={(e) => updateOrder(order.$id, order.status, e.target.value, order.password || '')}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Input
                                                                type="password"
                                                                placeholder="Password"
                                                                value={order.password || ''}
                                                                onChange={(e) => updateOrder(order.$id, order.status, order.email || '', e.target.value)}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button onClick={() => updateOrder(order.$id, order.status, order.email || '', order.password || '')}>
                                                                Save
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="profits">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Profit Requests</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[600px]">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Profit ID</TableHead>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Account</TableHead>
                                                    <TableHead>Amount</TableHead>
                                                    <TableHead>Status</TableHead>
                                                    <TableHead>Image</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {profits.map((profit) => (
                                                    <TableRow key={profit.$id}>
                                                        <TableCell>{profit.$id}</TableCell>
                                                        <TableCell>{new Date(profit.date).toLocaleDateString()}</TableCell>
                                                        <TableCell>{profit.account}</TableCell>
                                                        <TableCell>${profit.amount}</TableCell>
                                                        <TableCell>
                                                            <Select
                                                                value={profit.status}
                                                                onValueChange={(value) => console.log('status')}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue>{profit.status}</SelectValue>
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="pending">Pending</SelectItem>
                                                                    <SelectItem value="approved">Approved</SelectItem>
                                                                    <SelectItem value="not approved">Not Approved</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </TableCell>
                                                        <TableCell>
                                                            {profit.imageId && (
                                                                <img src={`${service.getFilePreview(profit.imageId)}`} alt="Profit" className="w-12 h-12 object-cover" />
                                                            )}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AdminDashboard
