import { useForm } from "react-hook-form";
import usePublicAxios from "../../Hooks/usePublicAxios";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = usePublicAxios();




    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }




    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageFile1 = { image: data.image[1] }
        const res1 = await axiosPublic.post(image_hosting_api, imageFile1, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageFile2 = { image: data.image[2] }
        const res2 = await axiosPublic.post(image_hosting_api, imageFile2, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageFile3 = { image: data.image[3] }
        const res3 = await axiosPublic.post(image_hosting_api, imageFile3, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageFile4 = { image: data.image[4] }
        const res4 = await axiosPublic.post(image_hosting_api, imageFile4, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                title: data.title,
                tour_type: data.tourType,
                price: parseFloat(data.price),
                datails: data.datails,
                image: [res.data.data.display_url, res1.data.data.display_url, res2.data.data.display_url, res3.data.data.display_url, res4.data.data.display_url],
                tour_plane: val
            }
            // 
            const menuRes = await axiosPublic.post('/addpackage', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
            }
        }
    };
    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">Add package</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Package Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="package-title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Tour Type*</span>
                            </label>
                            <select defaultValue="default" {...register('tourType', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Selec tour type</option>
                                <option value="Hosted tours">Hosted tours</option>
                                <option value="Family tours">Family tours</option>
                                <option value="Adventure tourism">Adventure tourism</option>
                                <option value="Business tourism">Business tourism</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}

                    <div>
                        <a onClick={() => handleAdd()} className="btn bg-secondary/50 hover:bg-secondary">Add tour plane</a>
                        <div className="flex flex-col gap-6 mt-7">
                            {val.map((data, i) => <div key={i} className="flex gap-3">
                                <input className="input input-bordered w-full" value={data} onChange={e => handleChange(e, i)} />
                                <button onClick={() => handleDelete(i)}>Remove</button>
                            </div>)}
                        </div>
                    </div>





                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Package Details</span>
                        </label>
                        <textarea {...register('datails')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', {
                            required: true, validate: {
                                minFiles: (files) => files.length >= 5 || 'Please select at least five file',
                            }
                        })} multiple type="file" className="file-input w-full max-w-xs" />
                    </div>


                    <button className="btn bg-secondary/50 hover:bg-secondary">
                        Add Package
                    </button>
                </form>
            </div>
        </div >
    );
};

export default AddTour;