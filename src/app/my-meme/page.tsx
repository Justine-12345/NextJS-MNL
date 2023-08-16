'use client'
import { useState, useEffect, Suspense } from 'react'
import AddPost from '../components/Addpost';
import PostCard from '../components/Post';
import { myPost } from '../../../actions/user';
import { getAuthUser } from '../../../actions/user';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  const [posts, setPosts] = useState<any | null>()
  const [loading, setLoading] = useState(true)
  const [authUser, setAuthUser] = useState(false)


  useEffect(() => {
    const fetchData = async () => {

      const result = await myPost();
      
      if (result.data.success === true) {
        setLoading(false);
      }
      setPosts(result.data);

      const authUserResult = await getAuthUser();

      if (authUserResult.data.success === true) {
        setAuthUser(true)
      } else {
        setAuthUser(false)
      }


    };

    fetchData();
  })


  return (
    <main className="flex min-h-screen flex-col items-center ">
      {authUser ? <AddPost /> : ""}
      <br />
      {loading ?
        <div className=' w-100vw flex justify-center ' >
          <SkeletonTheme baseColor="#111827" highlightColor="#374151">
            <p>
              <Skeleton style={{ borderRadius: "6px" }} className='w-full max-w-[52vw] min-w-[52vw] max-h-[60vh] h-[60vh] mb-6' count={3} />
            </p>
          </SkeletonTheme>
        </div> :
        <>
          {posts?.posts.map((post: Post) => {
            return (<PostCard key={post?._id} post={post} />)
          })}
        </>
      }
    </main>
  )
}
