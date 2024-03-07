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
        fetchBusiness();
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
              username: 'Tastin Official',
              profile_picture_url: "https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=826&t=st=1698805577~exp=1698806177~hmac=a70fc2095fbf07eae332ceca7077c8ddb12e91b88a801ef668ee3d3f8203d4c8",
              description: "Tastin official account"
            })
          );
          console.log('User saved successfully!', user);

          /* user = await DataStore.save(
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
          console.log('User saved successfully!', user); */

        } catch (error) {
          console.log('Error saving User', error);
        }
      }

///!!!!!!!!!!!

      async function addTestingBusiness() {
        try {

          var categories = [
            "Coffee shop"
        ];

          var review_keywords = [
            {
                "keyword": "matcha",
                "count": 12
            },
            {
                "keyword": "patio",
                "count": 10
            },
            {
                "keyword": "injeolmi",
                "count": 8
            },
            {
                "keyword": "parking",
                "count": 7
            },
            {
                "keyword": "espresso",
                "count": 7
            },
            {
                "keyword": "wifi",
                "count": 6
            },
            {
                "keyword": "cream latte",
                "count": 5
            },
            {
                "keyword": "pastries",
                "count": 5
            },
            {
                "keyword": "valet",
                "count": 4
            },
            {
                "keyword": "banana",
                "count": 4
            }
        ];

      var opening_hours =[
        {
            "day": "Monday",
            "times": [
                "8 AM-6 PM"
            ]
        },
        {
            "day": "Tuesday",
            "times": [
                "8 AM-6 PM"
            ]
        },
        {
            "day": "Wednesday",
            "times": [
                "8 AM-6 PM"
            ]
        },
        {
            "day": "Thursday",
            "times": [
                "8 AM-8 PM"
            ]
        },
        {
            "day": "Friday",
            "times": [
                "8 AM-8 PM"
            ]
        },
        {
            "day": "Saturday",
            "times": [
                "8 AM-8 PM"
            ]
        },
        {
            "day": "Sunday",
            "times": [
                "9 AM-6 PM"
            ]
        }
    ];

    var profile_showcase_pics = [
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_coffee_1.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_cofee.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_ladt.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_set.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_smile.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_patio2.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_patio3.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_patio4.jpg",
      "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_pickup.jpg",
    ]

          var business = await DataStore.save(
            new Business({
              name: '3THYME COFFEE',
              website: "https://3thyme.com/",
              rating: 4.7,
              long_description: `Menu Variety: High, with unique and creative drinks, including Korean-inspired beverages and pastries.
              Portion Sizes: Generally not mentioned, suggesting standard or satisfactory portions.
              Authenticity: High, especially noted for Korean-inspired espresso beverages and unique drink options.
              Alcohol Selection: Available, with the place becoming a wine bar on some nights.
              Beverage Quality: Mostly high, with several mentions of delicious coffee and specialty drinks.
              Dessert Menu: Mentioned positively, with specific pastries and unique offerings like croffles.
              Food Presentation: Not explicitly mentioned, but positive remarks on drink appearance suggest good presentation.
              Unique Selling Points: Korean-inspired beverages, specialty drinks like the Injeolmi Latte, and dual function as a coffee shop and wine bar.
              Special Dietary Options: Not specifically mentioned, though the variety of drinks may cater to different preferences.
              Decor and Ambiance: Highly praised, with mentions of cozy, modern, and aesthetically pleasing indoor and outdoor seating.
              Noise Level: Generally quiet, making it a good place for studying or working.
              Romantic Setting: Not explicitly mentioned, but the cozy and pleasant ambiance could imply suitability.
              Outdoor Seating: Frequently mentioned and appreciated, adding to the ambiance.
              Group Friendliness: Implied through mentions of spacious seating and group visits.
              Cleanliness: Generally noted as clean, with some exceptions related to external factors like parking or restrooms.
              Service Quality: Mixed, with several mentions of friendly and kind staff but some negative experiences.
              Serving Speed: Mixed, with some reports of careful drink preparation but also some slower service.
              Wait Times: Varied, with most not mentioning significant issues.
              Parking Availability: Mixed experiences, with some mentioning available parking and others noting charges or difficulties.
              Accessibility: Generally good, though some mentioned the location being hard to find.
              Late Night Availability: Yes, with the transition to a wine bar on certain nights.
              This café in Los Angeles, often recommended over others in the area, is celebrated for its cozy ambiance, featuring both indoor and outdoor seating, including a charming patio. It is well-regarded for its diverse and unique offerings, such as the Injeolmi Latte, Ham & Cheese Croissant, Banana Cream Latte, and Jalapeño Bagel with Cream Cheese, alongside a variety of pastries like cheese danishes. The café transforms into a wine bar on certain nights, adding to its cool and versatile vibe. The owner's chill and kind demeanor contributes to the welcoming atmosphere, making it a favored destination for both locals and visitors. However, the café's experience can vary. Some patrons leave disappointed due to less engaging staff and underwhelming offerings like a cold scone and a peculiar-tasting latte. Additionally, Wi-Fi connectivity issues have been mentioned, possibly detracting from its appeal as a work or study spot. The parking situation has drawn mixed reactions. While one review mentions almost being charged for parking and suggests a lack of effort in customer service could be why the café was empty, another praises the availability of a parking lot at the rear, indicating that parking may not always be a concern. Yet, another visitor expressed disappointment over being asked to pay a parking fee by a security guard, highlighting inconsistencies in the parking experience. Despite these criticisms, many find the café's coffee, particularly its unique Korean-inspired options like the Misu Latte and Injeolmi Latte, to be exceptional. The café's aesthetic, with modern and industrial elements, creates a conducive environment for both social gatherings and individual work, with accessible outlets and generally friendly staff. The matcha offerings receive special praise for their quality, even being recommended for non-coffee drinkers. The café's location in Koreatown is central, with some finding it a hidden gem due to its somewhat secluded setting. It holds its own against the many specialty coffee shops in the area, offering a quiet, chill vibe by day and a unique experience by night as a wine bar. Its selection of Korean-inspired espresso beverages, tea drinks, and pastries, alongside the engaging environment of indoor and outdoor seating, wifi availability, and the option of a wine bar at night, make it a multifaceted establishment catering to a wide array of tastes and preferences. In summary, this café in Los Angeles offers a distinctive blend of cozy ambiance, innovative beverages, and versatile space usage that appeals to a broad audience, despite some inconsistency in service and experiences. Its unique offerings, especially those inspired by Korean flavors, alongside the option of enjoying a wine bar at night, contribute to its reputation as a must-visit spot in Koreatown. However, potential visitors should be mindful of the mixed reviews regarding staff engagement, Wi-Fi reliability, and parking, which might affect their overall experience.`,
              address: "600 S Harvard Blvd #100, Los Angeles, CA 90005",
              review_keywords: review_keywords,
              categories: categories,
              main_category: "Coffee shop",
              description: null,
              phone: "(213) 568-3435",
              other_id: "ChIJWzvL0Sa5woAR9Q-VY1iqRcY",
              other_rating: 4.7,
              cuisine: "Coffee shop",
              price_level: 1,
              opening_hours: opening_hours,
              profile_pic: "https://weat2-test.s3.us-west-1.amazonaws.com/business_profile_showcase_pics/3thyme_coffee/3thyme_coffee_regular_logo.png",
              profile_showcase_pics: profile_showcase_pics
            })
          );



          console.log('Business saved successfully!', business);

          /* var business = await DataStore.save(
            new Business({
              id: 'c1c4b1ed-55a1-44a6-822b-9e0733a8879f',
              name: 'test business 5',
            })
          );
          console.log('Business saved successfully!', business); */

          /* business = await DataStore.save(
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
          console.log('Business saved successfully!', business); */


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
          // const business = await DataStore.query(Business);
          const business = await DataStore.query(Business, (b)=>b.name.contains("Juliana"));
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

          var temp_user = await DataStore.query(User, (u)=>u.id.eq("835fba7e-4d26-48a6-8ec0-761e460d949a"));
          const user = temp_user[0]
          console.log('User retrieved successfully!', JSON.stringify(user, null, 2));

          temp_business = await DataStore.query(Business, (u)=>u.id.eq("4eb3b122-35b8-4374-85e4-6f537b983ff8"));
          const business = temp_business[0]
          console.log('business retrieved successfully!', JSON.stringify(business, null, 2));

          var post = await DataStore.save(
            new Post({
              title: 'Another year, another reason to celebrate in style',
              description: '#japanese #bbq #wagyu',
              post_type: PostType.VLOG,
              cover_image_url: "https://weat2-test.s3.us-west-1.amazonaws.com/post_videos/niku_x4_cover.png",
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

          var temp_post= await DataStore.query(Post, (u)=>u.id.eq("b6be9aab-d910-4b86-ad37-675820fd6604"));
          const post = temp_post[0]
          console.log('Post retrieved successfully!', JSON.stringify(post, null, 2));

          var postMedia = await DataStore.save(
            new PostMedia({
              url: 'https://weat2-test.s3.us-west-1.amazonaws.com/post_videos/niku_x4.mp4',
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
          await DataStore.delete(Post, (b) => b.id.eq("65c18b1d-3190-494e-8ca2-86584f1bce9f"));
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