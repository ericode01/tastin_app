# Tastin

**Find your next meal by asking for it.** Tastin is a mobile food-discovery app that pairs an AI dining assistant with a short-video feed of restaurant vlogs and photo posts. Tell Tastin what you're craving and where, and it replies with restaurant cards you can tap into. Or scroll the feed to see what other diners are eating.

Built with **React Native + Expo** and backed by **AWS Amplify** (Cognito auth, AppSync GraphQL, DataStore).

---

## Features

| Tab | What it does |
| --- | --- |
| **Home** | Chat with the Tastin AI assistant ("cheap ramen near Koreatown?"). Replies can include tappable restaurant cards. Below the chat: curated picks like *Delightful Lunch Picks* and *Afternoon Coffee/Tea Break*. |
| **Explore** | Full-screen, swipeable feed of **vlogs** (short videos) and **plogs** (photo posts). Videos play when on screen and pause when scrolled away. Like, comment, and reply in threads. Paginated loading. |
| **Create** | Placeholder for post creation (currently used to seed test data). |
| **Hangout** | Group-chat style messaging UI. |
| **Me** | Your profile: bio, your posts, and posts you've liked. |

Other screens:

- **Business profile**: photos, rating, cuisine, price level, hours, address, and every post tagged to that restaurant.
- **User profile**: anyone's posts and liked posts.
- **Map**: restaurant location with a hand-off to Apple Maps / Google Maps.

## Tech stack

- **App:** React Native 0.72, Expo SDK 49, Expo Router (file-based routing)
- **UI:** React Navigation tabs, Reanimated, Gesture Handler, react-native-ui-lib, Lucide icons, Gifted Chat
- **Media:** `expo-av` / `react-native-video`, carousels, masonry lists
- **Maps:** `react-native-maps` (Google provider)
- **Backend:** AWS Amplify: Cognito (email sign-up), AppSync GraphQL API, DataStore for offline-first sync
- **AI assistant:** a separate HTTP service (`/weatai/ask/`) that returns a text reply plus referenced business IDs

## Data model

Defined in [`amplify/backend/api/amplifyDatasource/schema.graphql`](amplify/backend/api/amplifyDatasource/schema.graphql):

```
User ──< Post >── Business
          │
          ├──< PostMedia        (IMAGE | VIDEO)
          ├──< PostComment ──< PostCommentReply
          └──< UserPostLike >── User
```

- `Post.post_type` is `VLOG` (video) or `PLOG` (photo).
- `Business` holds restaurant details: rating, cuisine, price level, opening hours, categories, review keywords, and showcase photos.

## Project structure

```
app/
  _layout.js           # Amplify config, Authenticator, current-user context, stack routes
  index.js             # Font loading, redirects to the tab bar
  screens/             # Bottom tabs: explore (Home), home (Explore), create, hangout, me
  pages/               # Pushed screens: vlog, user_profile_page, business_profile_page, map
components/            # UI components (VideoPost, Plog, PostDetails, BusinessProfile, UserProfile, chat, ...)
contexts/              # CurrentLoggedInUserContext
data/                  # Local mock posts/comments
src/models/            # Amplify DataStore models (generated)
amplify/               # Amplify backend config (auth, API, schema)
assets/                # Fonts, images, sample videos
```

> Heads-up: tab file names and labels are swapped. `screens/explore.js` is the **Home** tab, and `screens/home.js` is the **Explore** feed.

## Getting started

### Prerequisites

- Node.js 18+
- [Expo CLI](https://docs.expo.dev/get-started/installation/) and Expo Go, or an iOS Simulator / Android Emulator
- [Amplify CLI](https://docs.amplify.aws/cli/start/installation/) and an AWS account

### Setup

```bash
git clone https://github.com/ericode01/tastin_app.git
cd tastin_app
npm install
```

Connect the Amplify backend. This creates `src/aws-exports.js` and `amplify/team-provider-info.json`, both gitignored:

```bash
amplify pull     # use an existing backend
# or
amplify init && amplify push   # create your own
```

Regenerate DataStore models after changing the schema:

```bash
npm run amplify-modelgen
```

Create your environment file and fill in your own keys:

```bash
cp .env.example .env
```

| Variable | Used for |
| --- | --- |
| `GOOGLE_MAPS_API_KEY` | Google Maps on iOS (read by `app.config.js`) |
| `EXPO_PUBLIC_TASTIN_AI_URL` | Endpoint of the Tastin AI assistant service |

### Run

```bash
npm start        # Expo dev server
npm run ios      # iOS simulator
npm run android  # Android emulator
```

## Roadmap

- [ ] Post creation flow (upload video/photos, tag a restaurant)
- [ ] Link the signed-in Cognito user to the `User` model
- [ ] Replace public GraphQL auth with owner/user-based rules
- [ ] Real messaging for Hangout
- [ ] Map view with nearby restaurants
