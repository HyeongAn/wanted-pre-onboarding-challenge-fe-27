import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '@/stores/atoms';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useRecoilState(authState);
  return (
    <div>
      
    </div>
  );
};

export default AuthProvider;