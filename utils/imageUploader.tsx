import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from './firebaseConfig';

export default async function imageUploader(image?: File| null) {

  const imageName = (image as File | any).name

  const storageRef = ref(storage, `image/${imageName}`);

  const result = await uploadBytes(storageRef, (image as File | any))
  const url = await getDownloadURL(result.ref)
  return url
}
