import React from 'react';

const SignInButton = () => {
  return (
    <div>
      <a
        href="/auth/github"  // This will go through the proxy
        style={{
          padding: '10px',
          backgroundColor: '#24292f',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Sign in with GitHub
      </a>
    </div>
  );
};

export default SignInButton;
