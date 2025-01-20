import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import ReactSelect from "react-select";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";


const BookingNow = () => {
    const { id, title } = useParams();
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm();
    const axiosSecure = useSecureAxios()

    const { data: users = {} } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    })



    const onSubmit = async (data) => {


        const Booking_Data = {
            bookingId: id,
            packageName: title,
            name: users.name,
            photo: users.photo,
            email: users.email,
            price: data.price,
            date: data.ReactDatepicker,
            guide: data.ReactSelect.value,
            status: "Pending"
        }

        const menuRes = await axiosSecure.post('/booking', Booking_Data);
        console.log(menuRes.data)
        if (menuRes.data.insertedId) {
            // show success popup
            reset();
        }

    }
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Package Details</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name")} name="name" placeholder="Name" defaultValue={users?.name} disabled className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  {...register("photoURL")} placeholder="Photo URL" defaultValue={users.photo} disabled className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email")} defaultValue={user.email} disabled name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-contro w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number"  {...register("price", { required: true })} name="price" placeholder="Price" className="input input-bordered w-full" />
                        {errors.email && <span className="text-red-600">Price is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label>React Select</label>
                        <Controller
                            className={"w-full input-bordered"}
                            name="ReactSelect"
                            control={control}
                            render={({ field }) => (
                                <ReactSelect
                                    isClearable
                                    {...field}
                                    options={[
                                        { value: "chocolate", label: "Chocolate" },
                                        { value: "strawberry", label: "Strawberry" },
                                        { value: "vanilla", label: "Vanilla" }
                                    ]}
                                />
                            )}
                        />

                    </div>
                    <div className="form-control w-full">
                        <label>Booking Date</label>
                        <Controller
                            control={control}
                            name="ReactDatepicker"
                            render={({ field }) => (
                                <DatePicker placeholderText="Select date"
                                    onChange={(e) => field.onChange(e)}
                                    selected={field.value} />
                            )}
                        />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-secondary/50 hover:bg-secondary" type="submit" value="Booking Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingNow;