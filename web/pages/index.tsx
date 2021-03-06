import { AxiosInstance } from 'axios';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { UserResponse } from './auth/signup';

export const LandingPage = ({ currentUser }) => {
  return (
    <div>
      <h2>Aumente a fidelidade e o engajamento dos seus clientes</h2>
    </div>
  );
};

// LandingPage.getInitialProps = async (
//   context: NextPageContext,
//   client: AxiosInstance,
//   currentUser: UserResponse
// ): Promise<{ tickets: any[] }> => {

//   return { tickets: [] };
// };

export default LandingPage;
