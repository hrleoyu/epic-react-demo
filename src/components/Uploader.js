import React ,{useRef} from "react";
import {useStores} from "../stores";
import {observer,useLocalStore} from "mobx-react";
import {message, Upload} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from "styled-components";

const { Dragger } = Upload;

const Result = styled.div`
    margin-top:30px;
    border:1px dashed #ccc;
    padding:20px;
`;
const H1 = styled.h1`
text-align:center;
margin:20px 0;
`;
const Dt = styled.dt`
text-align:center
`;

const Img = styled.img`
    max-width:300px;
`;


const Uploader =observer (() => {
    const {ImageStores,UserStores} = useStores();
    const ref1 = useRef();
    const ref2 = useRef();

    const store = useLocalStore(() => ({
        width:null,
        setWidth (width) {
          store.width = width
        },
        get widthStr (){
            return store.width ? `/w/${store.width}` : ``
        },
        height:null,
        setHeight (height){
          store.height = height
        },
        get heightStr () {
            return  store.height?`/h/${store.height}` : ``
        },
        get fullStr () {
            return ImageStores.serverFile.attributes.url.attributes.url + `?imageView2/0` + store.widthStr + store.heightStr
        }
    })
    );

    const bindWidth = () => {
        store.width = ref1.current.value
    };
    const bindHeight = () => {
        store.height = ref2.current.value
    };


    const props = {
        showUploadList :false ,
        beforeUpload: file => {
            console.log(file);
            ImageStores.setFile(file) ;
            ImageStores.setFilename(file.name);
            if (UserStores.currentUser === null){
                message.warning('请先登录');
                return false
            }
            ImageStores.upload()
                .then((serverFile) => {
                    console.log('上传成功')
                    console.log(serverFile)
                })
                .catch((err) => {
                    console.log('上传失败')
                    console.log(err)
                });
            return false;
        }
    };

    return (
        <>
            <h1>文件上传</h1>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            {
                ImageStores.serverFile ?
                    <Result>
                        <H1>上传结果</H1>
                        <dl>
                            <Dt>在线地址</Dt>
                                <dd><a target={'_blank'}>{ImageStores.serverFile.attributes.url.attributes.url}</a></dd>
                            <Dt>图片预览</Dt>
                                <dd>
                                    <Img src={ImageStores.serverFile.attributes.url.attributes.url}/> <br/>
                                    {ImageStores.filename}
                                </dd>
                            <Dt>更多尺寸</Dt>
                            <dd>
                                <input ref={ref1} onChange={bindWidth} placeholder={'最大宽度'}/>
                                <input ref={ref2} onChange={bindHeight} placeholder={'最大高度'}/>
                                <br/>
                                <a target={'_blank'} href={store.fullStr}>{store.fullStr}</a>
                            </dd>

                        </dl>
                    </Result> : null
            }
            </>
    )
});

export default Uploader