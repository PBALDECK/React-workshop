import React, { useReducer,useEffect, useState  } from 'react'
import { useParams,Link, useNavigate, useRoutes, } from 'react-router-dom'
import { User,Picker_Picture } from '../api/types'
import Field from '../private/Field'
import { getUser,getAllUser,createUser,updateUser,deleteUser} from '../api/user'
import ImageGalleryPicker from './ImageGalleryPicker'

type FormEvent =
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>

type FormData = { name: string; value: string | number | undefined }

const formReducer = (state: User | User, event: FormData) => {
    return {
        ...state,
        [event.name]: event.value,
    }
}

const UserProfile = () => {
    const [author, setAuthor] = useState<User | null>(null)
    const [users, setUsers] = useState<Array<User>>([])
    const [showPictureModal, setShowPictureModal] = useState<boolean>(false)
    const [formData, setFormData] = useReducer(
    formReducer,
    {} as User | User
)
    const navigate = useNavigate() // create a navigate function instance
    let { id } = useParams() // get the id from url

    function handleModalPictureSubmit(picture: Picker_Picture) {
        setFormData({
            name: 'postImageUrl',
            value: picture.src,
        })
    }
    function handleToggleModal() {
        // Show & Hide picture modal
        setShowPictureModal((s) => !s)
    }
    function convertToFormData(post: User): void {
        // helper to convert post data into formData
        // use it before set formData with API data
        // ex: convertToFormData(data):
        // eslint-disable-next-line array-callback-return
        ;(Object.keys(UserProfile) as Array<keyof typeof UserProfile>).map((key) => {
            setFormData({
                name: key,
                value: UserProfile[key],
            })
        })
    }

    async function _getAllUsers() {
        console.log("useEffect");
        const data = await getAllUser();
        setUsers(data);
    }
    async function _getUser(id: number){
        const data = await getUser(id);
        convertToFormData(data)
    }

    useEffect(() => {
        _getAllUsers();
    }, [])

    useEffect(() => {
        // chaque fois que l'id change
        _getUser(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function handleAddOrCreateUser(
        event: React.FormEvent<HTMLFormElement>
    ) {
        console.log(formData)
        // remove default reloading page
        event.preventDefault()

        if (id) {
            await updateUser(formData as User)
        } else {
            await createUser(formData)
        }

        // back to Home
        navigate('/')
    }

    async function handleDeleteUser() {
        await deleteUser(Number(id))
        // back to Home
        navigate('/')
    }

    function handleChange(event: FormEvent) {
        //
        const value =
            event.target.name === 'userId'
                ? Number(event.target.value)
                : event.target.value
        setFormData({
            name: event.target.name,
            value,
        })
    }
    return (
            <>
            <form className="post-form" onSubmit={handleAddOrCreateUser}>
                <Field label="Title">
                    <input
                        onBlur={handleChange}
                        name="title"
                        className="input"
                        type="text"
                        placeholder="Text input"
                        value={formData.name}
                    />
                </Field>
                <Field label="Content">
                    <textarea
                        onBlur={handleChange}
                        name="body"
                        className="textarea"
                        placeholder="e.g. Hello world"
                        value={formData.email}
                    />
                </Field>
                <Field label="Post Picture">
                    <input type="hidden" value="1" name="postImageID" />
                    <div>
                        <button
                            type="button"
                            className="button is-primary"
                            onClick={handleToggleModal}
                        >
                            Open picker modal
                        </button>
                    </div>
                </Field>
                {!!id && (
                    <Field label="Extra actions">
                        <button
                            type="button"
                            className="button is-warning"
                            onClick={handleDeleteUser}
                        >
                            Delete User
                        </button>
                    </Field>
                )}

                <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                        <button type="submit" className="button is-primary"
                        >                          
                            Submit
                        </button>
                    </p>
                    <p className="control">
                        <Link to="/" className="button is-light">
                            Cancel
                        </Link>
                    </p>
                </div>
            </form>
            {showPictureModal && (
                <ImageGalleryPicker
                    onClose={handleToggleModal}
                    onSubmit={handleModalPictureSubmit}
                />
            )}
            </>
        )
}

export default UserProfile
