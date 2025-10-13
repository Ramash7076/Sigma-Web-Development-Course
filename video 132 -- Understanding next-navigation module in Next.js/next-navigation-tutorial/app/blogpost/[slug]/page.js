"use client"
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
    const params = useParams()
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {

            router.push('/dashboard')
        }, 3000);
    }, [])
    return (<>
        <div>
            {params.slug}
        </div>
        <button type="button" onClick={() => router.push('/dashboard')}>
            Dashboard
        </button>
    </>
    )
}

export default page
