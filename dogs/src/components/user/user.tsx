import React from 'react';
import UserHeader from './user-header'
import { Routes, Route } from 'react-router-dom';
import Feed from '../feed/feed';
import UserPhotoPost from './user-photo-post';
import UserStats from './user-stats';
import { UserContext } from '../../UserContext';
// import NotFound from '../NotFound';
// import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      {/* <Head title="Minha Conta" /> */}
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </section>
  );
};

export default User;