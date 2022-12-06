import React, { useState } from 'react'
import './Gallery.css';

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });


export default function Gallery() {


    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://www.mumbailive.com/images/media/images/images_1582884916758_724488_street_light.jpg?bg=1b120f&crop=1280%2C720%2Cnull%2C0&fit=fill&fitToScale=h%2C1368%2C768&fm=webp&h=768&height=720&w=1368&width=1280',
        },
        {
            uid: '1',
            name: 'image.png',
            status: 'done',
            url: 'https://www.mumbailive.com/images/media/images/images_1582884916758_724488_street_light.jpg?bg=1b120f&crop=1280%2C720%2Cnull%2C0&fit=fill&fitToScale=h%2C1368%2C768&fm=webp&h=768&height=720&w=1368&width=1280',
        },
        {
            uid: '2',
            name: 'Tasnim Shahriar Akash',
            status: 'done',
            url: 'https://pbs.twimg.com/media/EKeuKGHUEAAUzQl.jpg',
        },


    ]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 1,
                }}
            >
                Upload
            </div>
        </div>
    );



    return (
        <div className='gallerBody'>
            <Upload style={{
                width: '350px',
                height: '350px'
            }}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 10 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </div>
    )
}
