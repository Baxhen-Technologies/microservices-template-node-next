// import { AxiosInstance } from 'axios';
// import { NextPageContext } from 'next';
// import Link from 'next/link';
// import { UserResponse } from './auth/signup';

export const LandingPage = ({ currentUser }) => {
  return (
    <div>
      <h2>Save Your Documents</h2>
      <p>
        Guarde os seus documento e comprovantes de forma segura e de fácil
        acesso quando preciso, não pague mais a mesma conta duas vezes!
      </p>
    </div>
  );
};

// LandingPage.getInitialProps = async (
//   context: NextPageContext,
//   client: AxiosInstance,
//   currentUser: UserResponse
// ): Promise<{ tickets: any[] }> => {
// };

export default LandingPage;
