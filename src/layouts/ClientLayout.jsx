import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import widthLayout from 'hocs/withLayout';
import React from 'react'

 function ClientLayout(props) {
    return (
        <>
            <Header/>
            {/* component này được bọc bởi ClientLayout thì nằm giữa header footer */}
            {props.children}
            <Footer/>
        </>
    )
}
export default widthLayout(ClientLayout);
