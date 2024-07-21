export function middleware(request) {

    const isUserLoggedIn = true

    if (!isUserLoggedIn) {
      return Response.redirect(new URL('/login', request.url))
    }
    
  }
   
  export const config = {
    matcher: '/dashboard',
  }