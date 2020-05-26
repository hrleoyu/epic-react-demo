import React from "react";
import {useStores} from "../stores";
import {observer} from "mobx-react";
import {message, Upload} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Uploader =observer (() => {
    const {ImageStores,UserStores} = useStores();


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
            </>
    )
});

export default Uploader