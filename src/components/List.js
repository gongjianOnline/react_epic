import React,{useEffect} from "react"
import {observer} from"mobx-react"
import {useStores} from "../stores"
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import styled from "styled-components"

const Img = styled.img`
  width: 100px;
  height: 120px;
  object-fit:contain;
  border:1px solid #eee;
`

const Component = observer(()=>{
  const {HistoryStore} = useStores();
  const loadMore = ()=>{
    HistoryStore.find();
  }
  const options = {
    initialLoad:true,
    pageStart:0,
    loadMore:loadMore,
    useWindow:true
  }
  useEffect(()=>{
    console.log("进入组件")


    return ()=>{
      console.log("列表组件卸载");
      HistoryStore.reset();
    }
  },[])

  return (
    <>
      <InfiniteScroll {...options}
                      hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}>
        <List
          dataSource={HistoryStore.list}
          renderItem={
            (item)=>{
              return <List.Item key={item.id}>
                <div>
                  <Img src={item.attributes.url.attributes.url} alt=""/>
                </div>
                <div>
                  <h5>{item.attributes.filename}</h5>
                </div>
                <div>
                  <a target="_blank" href={item.attributes.url.attributes.url}>查看</a>
                </div>
              </List.Item>
            }
          }>
        {
          HistoryStore.isLoading && HistoryStore.hasMore && (
            <div>
              <Spin tip="加载中"/>
            </div>
          )
        }
        </List>
      </InfiniteScroll>
    </>
  )
})
export default Component