import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import InfiniteScroll from 'react-infinite-scroller'
import {List,Spin} from "antd";
import styled from "styled-components";


const Img = styled.img`
    height:120px;
    width:100px;
`;

const Li = observer (() => {
    const { HistoryStores } = useStores();
    const loadMore = () => {
        HistoryStores.find()
    };

    useEffect(() =>{
        console.log('进入组件')

        return() => {
            console.log('卸载')
            HistoryStores.again()
        }
    },[])


// bug
// 刷新后页面历史记录还有
// list正序排列，需要倒序


    return(
     <>
         <InfiniteScroll
            initialLoad={true}
            pageStart={0}
            loadMore={loadMore}
            hasMore={!HistoryStores.isLoading&&HistoryStores.hasMore}
            useWindow={true}
         >
             <List
                 dataSource={HistoryStores.list}
                 renderItem = {item => (
                     <List.Item key={item.id}>
                         <div>
                             <Img src={item.attributes.url.attributes.url} />
                         </div>
                         <div>
                             <h5>{item.attributes.filename}</h5>
                         </div>
                         <div>
                             <a target={'_blank'} href={item.attributes.url.attributes.url} >在线预览</a>
                         </div>
                         <div>
                             <h5>{item.attributes.createdAt}</h5>
                         </div>
                     </List.Item>
                 )}
             >
                 {HistoryStores.isLoading && HistoryStores.hasMore && (
                     <div>
                         <Spin tip={'加载中'}/>
                     </div>
                 )}
             </List>
         </InfiniteScroll>
     </>
    )
});

export default Li