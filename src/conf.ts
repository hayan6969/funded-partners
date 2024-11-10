const conf={
    appwriteUrl:String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId:String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteOrdersCollectionId:String(process.env.NEXT_PUBLIC_APPWRITE_ORDERS_COLLECTION_ID),
    appwriteBucketId:String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
    appwriteDatabaseId:String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
}

export default conf