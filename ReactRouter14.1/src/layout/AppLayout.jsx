import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Loading from '../component/Loading'

const AppLayout = () => {
  const navigation= useNavigation();
  console.log(navigation);
  if (navigation.state==="loading")
    return <Loading / >;
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout
