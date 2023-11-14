import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import {useEffect, useState} from 'react';
import { DataStore } from 'aws-amplify';
import {User, Business, Post, PostType, PostMedia, MediaType,PostComment, PostCommentReply} from '../../src/models';


const Create = () => {

   /*  useEffect(() => {
      addTestingPostCommentReply();
      }, []); */
    
    
      useEffect(() => {
        fetchPostCommentReply();
      }, []); 

      /* useEffect(() => {
        deleteBusiness();
      }, []); */

      /* async function clearAllDataLocally(){
        try{
        await DataStore.clear();
        }
        catch(error){
          console.log('Error clearAllData', error);
        }
      } */
    
      async function addTestingUser() {
        try {
          var user = await DataStore.save(
            new User({
              username: 'testuser2',
              profile_picture_url: "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=826&t=st=1698805577~exp=1698806177~hmac=a70fc2095fbf07eae332ceca7077c8ddb12e91b88a801ef668ee3d3f8203d4c8",
              description: "this is test user 2"
            })
          );
          console.log('User saved successfully!', user);

          user = await DataStore.save(
            new User({
              username: 'testuser1',
              profile_picture_url: "https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?w=826&t=st=1698805787~exp=1698806387~hmac=8aea0ab2f11c0ef6d5db704c87d892ceedaede9e8e27061162603731c3459ece",
              description: "this is test user 1"
            })
          );
          console.log('User saved successfully!', user);

          
          var user = await DataStore.save(
            new User({
              username: 'testuser3',
              profile_picture_url: "https://img.freepik.com/free-photo/cartoon-character-with-fashion-bag_71767-98.jpg?w=826&t=st=1699844762~exp=1699845362~hmac=6e6856855f4c41cc36ea3fa8d4f77cd4d67790ab82a0742e5c025c26af294f86",
              description: "this is test user 3"
            })
          );
          console.log('User saved successfully!', user);

        } catch (error) {
          console.log('Error saving User', error);
        }
      }

      async function addTestingBusiness() {
        try {
          var business = await DataStore.save(
            new Business({
              name: 'test business 1',
            })
          );
          console.log('Business saved successfully!', business);

          business = await DataStore.save(
            new Business({
              name: 'test business 2',
            })
          );
          console.log('Business saved successfully!', business);

          business = await DataStore.save(
            new Business({
              name: 'test business 3',
            })
          );
          console.log('Business saved successfully!', business);

          var business = await DataStore.save(
            new Business({
              name: 'test business 4',
            })
          );
          console.log('Business saved successfully!', business);


        } catch (error) {
          console.log('Error saving business', error);
        }
      }
    
      async function fetchUser(){
        try {
          const users = await DataStore.query(User);
          console.log('Users retrieved successfully!', JSON.stringify(users, null, 2));
        } catch (error) {
          console.log('Error retrieving users', error);
        }
      }

      async function fetchBusiness(){
        try {
          const business = await DataStore.query(Business);
          console.log('Business retrieved successfully!', JSON.stringify(business, null, 2));
        } catch (error) {
          console.log('Error retrieving business', error);
        }
      }

      async function addTestingPost() {
        try {
          /* var business = await DataStore.save(
            new Business({
              name: 'test business 1',
            })
          );
          console.log('Business saved successfully!', business); */

          var temp_user = await DataStore.query(User, (u)=>u.username.eq("testuser1"));
          const user = temp_user[0]
          console.log('User retrieved successfully!', JSON.stringify(user, null, 2));

          temp_business = await DataStore.query(Business, (u)=>u.name.eq("test business 4"));
          const business = temp_business[0]
          console.log('business retrieved successfully!', JSON.stringify(business, null, 2));

          var post = await DataStore.save(
            new Post({
              title: 'test post 1 for user1 and business4',
              description: 'run inserts into DynamoDB on new user confirmation for all of the above information. However, if you want to manage a user updating their email / phone, you can use the Pre-Token trigger which is invoked any time there is a change in the user attributes so that it can regAll DataStore operations are local first. This means that when you run a query, it returns results from the local system, which can be sorted and filtered. The same is true for mutations or observations to data. So, no network latencies or constraints on the backend are present. Operations are run for your developers to integrate into your application. However, they still have control to act upon things when the local store integrates back with the rest of the system, such as reacting to data updates or write conflicts when merges take place.)',
              post_type: PostType.VLOG,
              cover_image_url: "https://weat2-test.s3.us-west-1.amazonaws.com/post_cover_images/Screenshot+2023-11-12+at+4.47.21%E2%80%AFPM.png",
              user: user,
              business: business
            })
          );
          console.log('Post saved successfully!', post);

        } catch (error) {
          console.log('Error saving post', error);
        }
      }

      async function fetchPost(){
        try {
          const post = await DataStore.query(Post);
          console.log('Post retrieved successfully!', JSON.stringify(post, null, 2));
          //DataStore.delete(post[0]);
        } catch (error) {
          console.log('Error retrieving Post', error);
        }
      }

      async function addTestingPostMedia() {
        try {
          /* var business = await DataStore.save(
            new Business({
              name: 'test business 1',
            })
          );
          console.log('Business saved successfully!', business); */

          var temp_post= await DataStore.query(Post, (u)=>u.id.eq("07299ecf-4cbe-448e-af36-12f1822c99b7"));
          const post = temp_post[0]
          console.log('Post retrieved successfully!', JSON.stringify(post, null, 2));

          var postMedia = await DataStore.save(
            new PostMedia({
              url: 'https://weat2-test.s3.us-west-1.amazonaws.com/short_video_examples/8_1691178196.mp4',
              media_type: MediaType.VIDEO,
              post: post,
            })
          );
          console.log('PostMedia saved successfully!', post);

        } catch (error) {
          console.log('Error saving PostMedia', error);
        }
      }

      async function fetchPostMedia(){
        try {
          const postMedia = await DataStore.query(PostMedia);
          console.log('PostMedia retrieved successfully!', JSON.stringify(postMedia, null, 2));
          //DataStore.delete(post[0]);
        } catch (error) {
          console.log('Error retrieving postMedia', error);
        }
      }

      async function addTestingPostComment() {
        try {
          /* var business = await DataStore.save(
            new Business({
              name: 'test business 1',
            })
          );
          console.log('Business saved successfully!', business); */

          var temp_user = await DataStore.query(User, (u)=>u.username.eq("testuser3"));
          const user = temp_user[0]
          console.log('User retrieved successfully!', JSON.stringify(user, null, 2));

          var temp_post = await DataStore.query(Post, (u)=>u.id.eq("4f7ac73e-7cc3-4156-958b-13e73ea19470"));
          const post = temp_post[0]
          console.log('post retrieved successfully!', JSON.stringify(post, null, 2));

          var postComment = await DataStore.save(
            new PostComment({
              content: 'aflaj sfadsf 323 rigger which is invoked any time there is a change in the user attributes so that it can regAll DataStore operations are local first.',
              user: user,
              post: post
            })
          );
          console.log('postComment saved successfully!', post);

        } catch (error) {
          console.log('Error saving postComment', error);
        }
      }

      async function fetchPostComment(){
        try {
          const postComment = await DataStore.query(PostComment);
          console.log('postComment retrieved successfully!', JSON.stringify(postComment, null, 2));
          //DataStore.delete(post[0]);
        } catch (error) {
          console.log('Error retrieving postComment', error);
        }
      }

      async function addTestingPostCommentReply() {
        try {
          /* var business = await DataStore.save(
            new Business({
              name: 'test business 1',
            })
          );
          console.log('Business saved successfully!', business); */

          var temp_user = await DataStore.query(User, (u)=>u.username.eq("testuser2"));
          const user = temp_user[0]
          console.log('User retrieved successfully!', JSON.stringify(user, null, 2));

          var temp_post = await DataStore.query(Post, (u)=>u.id.eq("4f7ac73e-7cc3-4156-958b-13e73ea19470"));
          const post = temp_post[0]
          console.log('post retrieved successfully!', JSON.stringify(post, null, 2));

          var temp_post_comment = await DataStore.query(PostComment, (u)=>u.id.eq("332635f2-7e79-4e8d-af52-fd12ab265074"));
          const post_comment = temp_post_comment[0]
          console.log('post_comment retrieved successfully!', JSON.stringify(post_comment, null, 2));

          var postCommentReply = await DataStore.save(
            new PostCommentReply({
              content: 'reply to the post comment - 7 - aflaj sfadsf 323 rigger which is invoked any time there is a change in t.',
              user: user,
              post: post,
              post_comment: post_comment,
              reply_to_user_id: "6dcc6ed6-2b02-4db6-83cf-78271c5ae4d3",
              reply_to_user_name: "testuser1"
            })
          );
          console.log('PostCommentReply saved successfully!', post);

        } catch (error) {
          console.log('Error saving PostCommentReply', error);
        }
      }

      async function fetchPostCommentReply(){
        try {
          const postCommentReply = await DataStore.query(PostCommentReply);
          console.log('postCommentReply retrieved successfully!', JSON.stringify(postCommentReply, null, 2));
          //DataStore.delete(post[0]);
        } catch (error) {
          console.log('Error retrieving postCommentReply', error);
        }
      }

      async function deleteBusiness(){
        try {
          await DataStore.delete(Post, (b) => b.id.eq("c8f12326-1aab-4428-82fb-0e6a29f5e525"));
          console.log('Business deleted successfully!');
          //DataStore.delete(post[0]);
        } catch (error) {
          console.log('Error deleting Business', error);
        }
      }

    return (
        <Text>Create</Text>
    );
}

export default Create;