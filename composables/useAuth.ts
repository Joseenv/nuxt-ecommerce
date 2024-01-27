export const useAuth = () => {
  const baseAPI = 'https://fakestoreapi.com';
  const router = useRouter();
  
  const loginUser = async ( data: { username: string, password: string }) => {
    
    const { username, password } = data;

    try {
      console.log('Se ejecuta loginUser');
      const response = await fetch(`${baseAPI}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        }),
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      // if (result.token) {
      //   localStorage.setItem('token', result.token);
      //   router.push('/');
      // }
    } catch (error) {
      console.log(error);
    }

  }


  return {
    loginUser
  }
}