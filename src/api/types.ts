export type Post = {
    id: number
} & PostContent

export type PostContent = {
    userId: number
    title: string
    body: string
    postImageUrl: string | undefined
}

export type API_Picture = {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
}

export type Picker_Picture = {
    height: number
    id: string
    src: string
    width: number
}

export type User = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
    }
    phone: string
    company: {
        name: string
    }
}
