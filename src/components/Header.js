import React from 'react'
import './Header.css'
import { PageHeader } from 'antd';

export default function Header() {
  return (
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
  )
}
