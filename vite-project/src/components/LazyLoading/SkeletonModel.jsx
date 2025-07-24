import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from 'react'

function SkeletonModel() {
  return (

    <>
    <div>
      <Skeleton height={30} width={250} />
      <Skeleton height={20} width={150} />
      <Skeleton height={20} width={100} />
    </div>
    </>
)

}

export default SkeletonModel