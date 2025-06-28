# Auth0 Setup Guide for SmartQuot

## 1. Create Auth0 Application

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Click **"Applications"** → **"Create Application"**
3. Choose **"Single Page Application"**
4. Name: **"SmartQuot Web App"**

## 2. Configure Application Settings

### Allowed Callback URLs:
```
https://smartquot.net/callback
https://app.smartquot.net/callback
http://localhost:3000/callback
```

### Allowed Logout URLs:
```
https://smartquot.net
https://app.smartquot.net
http://localhost:3000
```

### Allowed Web Origins:
```
https://smartquot.net
https://app.smartquot.net
http://localhost:3000
```

## 3. Get Your Credentials

After creating the application, copy:
- **Domain** (e.g., `your-tenant.auth0.com`)
- **Client ID** (e.g., `abc123def456...`)

## 4. Environment Variables

Create a `.env` file in the `smartquot-landing` directory:

```env
REACT_APP_AUTH0_DOMAIN=your-tenant.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-client-id-here
REACT_APP_AUTH0_CALLBACK_URL=https://smartquot.net/callback
REACT_APP_APP_URL=https://app.smartquot.net
REACT_APP_LANDING_URL=https://smartquot.net
```

## 5. Update Auth0Provider

Make sure your Auth0Provider in `App.js` uses these environment variables:

```jsx
<Auth0Provider
  domain={process.env.REACT_APP_AUTH0_DOMAIN}
  clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
  authorizationParams={{
    redirect_uri: process.env.REACT_APP_AUTH0_CALLBACK_URL
  }}
>
  {/* Your app components */}
</Auth0Provider>
```

## 6. Vercel Environment Variables

Add these environment variables in your Vercel dashboard:
1. Go to your project settings
2. Click **"Environment Variables"**
3. Add each variable from step 4

## 7. Test the Setup

1. Deploy your app
2. Test login/logout functionality
3. Verify redirects work correctly 