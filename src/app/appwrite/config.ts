import conf from "../../conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket; //storage

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createOrder({ Date, userId, username, plan, budget, type,pictureId,status,email,password,broker }:{Date:string,userId:string,username:string,plan:string,budget:string,type:string,pictureId:string,status:string,email:string,password:string,broker:string}) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCollectionId,
        ID.unique(), //id for the document
        {
            Date,
            userId,
            username,
            plan,
            budget,
            type,
            pictureId,
            status,
            email,
            password,
            broker
        }
      )
    } catch (error) {
      console.log("Service :: createPost :: error :: ", error);
    }
  }

  async updateOrder(slug: string, status: string, email: string, password: string) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCollectionId,
        slug,
        {
          status,
          email,
          password,
        }
      );
    } catch (error) {
      console.log("Service :: updateOrderStatus :: error :: ", error);
    }
  }

  // async deletePost(slug) {
  //   try {
  //     await this.databases.deleteDocument(
  //       conf.appwriteDatabaseId,
  //       conf.appwriteCollectionId,
  //       slug
  //     );
  //     return true;
  //   } catch (error) {
  //     console.log("Service :: deletePost :: error :: ", error);
  //     return false;
  //   }
  // }

  async getOrder(slug: string) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCollectionId,
        slug
      );
    } catch (error) {
      console.log("Service :: getPost :: error :: ", error);
      return false;
    }
  }

  async getOrders(userId?: string, queries = userId ? [Query.equal("userId", userId)] : []) {
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteOrdersCollectionId,
            queries
        );
    } catch (error) {
        console.log("Service :: getOrders :: error :: ", error);
        return false;
    }
  }

  //file upload and delete service

  async uploadFile(file:any){
    try {
       return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
       )
    } catch (error) {
        console.log("Service :: uploadFile :: error :: ", error);
        return false
    }
  }

  async deleteFile(fileId:string){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Service :: deleteFile :: error :: ", error);
        return false
    }
  }

  async getFilePreview(fileId:string){
    try {
       return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.log("Service :: getFilePreview :: error :: ", error);
    }
  }

  getImagePreview(fileId:string){
    return `https://cloud.appwrite.io/v1/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/preview?project=${conf.appwriteProjectId}`
  }
}

const service = new Service();
export default service;
