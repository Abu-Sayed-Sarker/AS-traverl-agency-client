import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import useSecureAxios from "../../Hooks/useSecureAxios";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const GuideAddStories = () => {

    const { user } = useAuth();
    const axiosPublic = usePublicAxios();
    const axiosSecure = useSecureAxios();
    const { register, reset, handleSubmit } = useForm();


    const onSubmit = async (data) => {

        const imageUrls = [];

        for (let i = 0; i < data.image.length; i++) {
            const imageFile = { image: data.image[i] };

            try {
                const res = await axiosPublic.post(image_hosting_api, imageFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });

                imageUrls.push(res.data.data.display_url);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

        const storie = {
            title: data.title,
            email: user.email,
            storie: data.storie,
            images: imageUrls
        }



        const responce = await axiosSecure.post('/guide-stories', storie);
        console.log(responce.data)
        if (responce.data.insertedId) {
            // show success popup
            reset();
        }
    }

    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">Add Stories</h1>

            <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Storie Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="stotie-title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Storie</span>
                        </label>
                        <textarea {...register('storie')} className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', {
                            required: true,
                        })} multiple type="file" className="file-input w-full max-w-xs" />
                    </div>


                    <button className="btn bg-secondary/50 hover:bg-secondary">
                        Add storie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GuideAddStories;