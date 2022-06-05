import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;

        const newUser = { email: email, name: name };

        if (email) {
            fetch(`https://polar-cove-29814.herokuapp.com/user/${email}`,
                {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user])

    return [token];
};

export default useToken;