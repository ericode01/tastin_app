export default [
    {
        id: "p1",
        postType: "vlog",
        user: {
            id: "u1",
            username: "testusername1",
            imageUri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576",
        },
        title:"short title",
        description: "Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before.\n\nVideo get many props, but in order to play a video, we only need those 4.source is the important one — if it was null, the component wouldn’t display nothing. You can also play a local file using require('path/to/file'), but were using an online .mp4 file.",
        likes: 123,
        bookmarks: 456,
        shares: 789,
        videoUri: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
        coverImage: "https://img.freepik.com/free-photo/fresh-homemade-chicken-tacos-recipe-idea_53876-105982.jpg?w=1380&t=st=1691543811~exp=1691544411~hmac=d64c5bf011bbdad7573564c2eb062beccd87460943551b14a417e68f1d369657"
    },

    {
        id: "p6",
        postType: "plog",
        user: {
            id: "u1",
            username: "testusername5",
            imageUri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576",
        },
        title:"Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before.",
        description: "Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before. Video get many props, but in order to play a video, we only need those 4.source is the important one — if it was null, the component wouldn’t display nothing. You can also play a local file using require('path/to/file'), but were using an online .mp4 file. \n\nThe uri property let the component know that we are going to load video from the internet.shouldPlay describing if the media is supposed to play (obviously), and we’re also need the style prop to set height & weight, or the video component would play but we couldn’t see nothing. finally, resizeMode describing how the video should be scaled for display in the component view bounds.After all of this, we are now playing a video in react-native! You should see something like this:",
        likes: 123,
        bookmarks: 456,
        shares: 789,
        coverImage:"https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
        images: [
            
            {
                title: "Lorem Ipsum",
                body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
                imgUrl: "https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
            },
            {
                title: "Aenean leo",
                body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
                imgUrl: "https://img.freepik.com/free-photo/fresh-homemade-chicken-tacos-recipe-idea_53876-105982.jpg?w=1380&t=st=1691543811~exp=1691544411~hmac=d64c5bf011bbdad7573564c2eb062beccd87460943551b14a417e68f1d369657",
            },
            {
                title: "In turpis",
                body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
                imgUrl: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000&t=st=1691543833~exp=1691544433~hmac=14e1c8ed9899ccf1f84b97c1bea9c3d6b78034cafaee59c69ae90c7dcbd92ca2",
            },
            {
                title: "Lorem Ipsum",
                body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
                imgUrl: "https://img.freepik.com/free-photo/top-view-grilled-salmon-steak-with-vegetables-lemon-spices-white-plate-white_140725-12389.jpg?w=1380&t=st=1691543865~exp=1691544465~hmac=a69b27114baf74315640d8652f39dac28c67fa4443fc79d3b932b1fbc1cfd5c2",
            },
            {
                title: "Aenean leo",
                body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
                imgUrl: "https://img.freepik.com/free-photo/spaghetti-meatball-topped-with-parmesan-basil-food-photography_53876-96047.jpg?w=1380&t=st=1691543892~exp=1691544492~hmac=c82fcc8c1db68bec690360c4687b593813669060efc2a282df0f5e90e5fea935",
            },
            {
                title: "In turpis",
                body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
                imgUrl: "https://img.freepik.com/free-photo/sweet-potato-buddha-bowl-white-table-flat-lay_53876-98300.jpg?w=900&t=st=1691543916~exp=1691544516~hmac=84431b88ef23475d99a3c92bc7c4b16e0ce2adb5af5dcbfec271d82c83a489c1",
            },
            {
                title: "Lorem Ipsum",
                body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
                imgUrl: "https://img.freepik.com/free-photo/top-view-delicious-mahi-mahi-fish-with-lemon_23-2150457342.jpg?t=st=1691543944~exp=1691547544~hmac=65490940d315a40b618ec7d5ca9c0b09538729ce92a1c7cab353c6c883d11f1d&w=2000",
            },
            {
                title: "Aenean leo",
                body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
                imgUrl: "https://img.freepik.com/free-photo/cheeseburger-with-lettuce-tomato_140725-112.jpg?w=1060&t=st=1691544078~exp=1691544678~hmac=f368cfc4aff61d36eb0984b882b3b9732a3478f67cba1947f5e3196bb19ef458",
            },
            {
                title: "In turpis",
                body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
                imgUrl: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1800&t=st=1691543682~exp=1691544282~hmac=c80a6896012fc396546f8e46309e83b88908e1ae61f1c54105c386d90dc0223e",
            },
        ],
    },


    {
        id: "p2",
        postType: "vlog",
        user: {
            id: "u1",
            username: "testusername2",
            imageUri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576",
        },
        title:"Let’s take a quick look at the code. The App class is the first co",
        description: "Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before. Video get many props, but in order to play a video, we only need those 4.source is the important one — if it was null, the component wouldn’t display nothing. You can also play a local file using require('path/to/file'), but were using an online .mp4 file.\n\nThe uri property let the component know that we are going to load video from the internet.shouldPlay describing if the media is supposed to play (obviously), and we’re also need the style prop to set height & weight, or the video component would play but we couldn’t see nothing. finally, resizeMode describing how the video should be scaled for display in the component view bounds.After all of this, we are now playing a video in react-native! You should see something like this:",
        likes: 123,
        bookmarks: 456,
        shares: 789,
        coverImage:"https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
        videoUri: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4"
    },


    {
        id: "p3",
        postType: "vlog",
        user: {
            id: "u1",
            username: "testusername3",
            imageUri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576",
        },
        title:"Let’s take a quick look at the ",
        description: "Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before. Video get many props, but in order to play a video, we only need those 4.source is the important one — if it was null, the component wouldn’t display nothing. You can also play a local file using require('path/to/file'), but were using an online .mp4 file.\n\nThe uri property let the component know that we are going to load video from the internet.shouldPlay describing if the media is supposed to play (obviously), and we’re also need the style prop to set height & weight, or the video component would play but we couldn’t see nothing. finally, resizeMode describing how the video should be scaled for display in the component view bounds.After all of this, we are now playing a video in react-native! You should see something like this:",
        likes: 123,
        bookmarks: 456,
        shares: 789,
        coverImage:"https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
        videoUri: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4"
    },

    {
        id: "p6",
        postType: "plog",
        user: {
            id: "u1",
            username: "testusername5",
            imageUri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576",
        },
        title:"Let’s take a quick look at the code. The App class is the first co",
        description: "Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before. Video get many props, but in order to play a video, we only need those 4.source is the important one — if it was null, the component wouldn’t display nothing. You can also play a local file using require('path/to/file'), but were using an online .mp4 file.\n\nThe uri property let the component know that we are going to load video from the internet.shouldPlay describing if the media is supposed to play (obviously), and we’re also need the style prop to set height & weight, or the video component would play but we couldn’t see nothing. finally, resizeMode describing how the video should be scaled for display in the component view bounds.After all of this, we are now playing a video in react-native! You should see something like this:",
        likes: 123,
        bookmarks: 456,
        shares: 789,
        coverImage:"https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
        images: [
            
            {
                title: "Lorem Ipsum",
                body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
                imgUrl: "https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
            },
            {
                title: "Aenean leo",
                body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
                imgUrl: "https://img.freepik.com/free-photo/fresh-homemade-chicken-tacos-recipe-idea_53876-105982.jpg?w=1380&t=st=1691543811~exp=1691544411~hmac=d64c5bf011bbdad7573564c2eb062beccd87460943551b14a417e68f1d369657",
            },
            {
                title: "In turpis",
                body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
                imgUrl: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000&t=st=1691543833~exp=1691544433~hmac=14e1c8ed9899ccf1f84b97c1bea9c3d6b78034cafaee59c69ae90c7dcbd92ca2",
            },
            {
                title: "Lorem Ipsum",
                body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
                imgUrl: "https://img.freepik.com/free-photo/top-view-grilled-salmon-steak-with-vegetables-lemon-spices-white-plate-white_140725-12389.jpg?w=1380&t=st=1691543865~exp=1691544465~hmac=a69b27114baf74315640d8652f39dac28c67fa4443fc79d3b932b1fbc1cfd5c2",
            },
            {
                title: "Aenean leo",
                body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
                imgUrl: "https://img.freepik.com/free-photo/spaghetti-meatball-topped-with-parmesan-basil-food-photography_53876-96047.jpg?w=1380&t=st=1691543892~exp=1691544492~hmac=c82fcc8c1db68bec690360c4687b593813669060efc2a282df0f5e90e5fea935",
            },
            {
                title: "In turpis",
                body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
                imgUrl: "https://img.freepik.com/free-photo/sweet-potato-buddha-bowl-white-table-flat-lay_53876-98300.jpg?w=900&t=st=1691543916~exp=1691544516~hmac=84431b88ef23475d99a3c92bc7c4b16e0ce2adb5af5dcbfec271d82c83a489c1",
            },
            {
                title: "Lorem Ipsum",
                body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
                imgUrl: "https://img.freepik.com/free-photo/top-view-delicious-mahi-mahi-fish-with-lemon_23-2150457342.jpg?t=st=1691543944~exp=1691547544~hmac=65490940d315a40b618ec7d5ca9c0b09538729ce92a1c7cab353c6c883d11f1d&w=2000",
            },
            {
                title: "Aenean leo",
                body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
                imgUrl: "https://img.freepik.com/free-photo/cheeseburger-with-lettuce-tomato_140725-112.jpg?w=1060&t=st=1691544078~exp=1691544678~hmac=f368cfc4aff61d36eb0984b882b3b9732a3478f67cba1947f5e3196bb19ef458",
            },
            {
                title: "In turpis",
                body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
                imgUrl: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1800&t=st=1691543682~exp=1691544282~hmac=c80a6896012fc396546f8e46309e83b88908e1ae61f1c54105c386d90dc0223e",
            },
        ],
    },

    {
        id: "p4",
        postType: "vlog",
        user: {
            id: "u1",
            username: "testusername4",
            imageUri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576",
        },
        title:"Let’s take a quick look at the code. The App class is the first coe. The App clas",
        description: "Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before. Video get many props, but in order to play a video, we only need those 4.source is the important one — if it was null, the component wouldn’t display nothing. You can also play a local file using require('path/to/file'), but were using an online .mp4 file.\n\nThe uri property let the component know that we are going to load video from the internet.shouldPlay describing if the media is supposed to play (obviously), and we’re also need the style prop to set height & weight, or the video component would play but we couldn’t see nothing. finally, resizeMode describing how the video should be scaled for display in the component view bounds.After all of this, we are now playing a video in react-native! You should see something like this:",
        likes: 123,
        bookmarks: 456,
        shares: 789,
        coverImage:"https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
        videoUri: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4"
    },



    {
        id: "p5",
        postType: "vlog",
        user: {
            id: "u1",
            username: "testusername5",
            imageUri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576",
        },
        title:"Let’s take a quick look at the code. The App class is the first coe. The App clas",
        description: "Let’s take a quick look at the code. The App class is the first component in our app which created by create-react-native-app. We’ve replaced the default text under the <View> tag with the <Video> we imported before. Video get many props, but in order to play a video, we only need those 4.source is the important one — if it was null, the component wouldn’t display nothing. You can also play a local file using require('path/to/file'), but were using an online .mp4 file.\n\nThe uri property let the component know that we are going to load video from the internet.shouldPlay describing if the media is supposed to play (obviously), and we’re also need the style prop to set height & weight, or the video component would play but we couldn’t see nothing. finally, resizeMode describing how the video should be scaled for display in the component view bounds.After all of this, we are now playing a video in react-native! You should see something like this:",
        likes: 123,
        bookmarks: 456,
        shares: 789,
        coverImage:"https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1691543709~exp=1691544309~hmac=4ea196aa24225056bb7e8c5b6dc8ad58294015e58c0c7250416c1a779315391a",
        videoUri: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4"
    },

    
]