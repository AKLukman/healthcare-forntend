
import HCForm from "@/components/Forms/HCForm";
import HCInputs from "@/components/Forms/HCInputs";
import HCSelectInput from "@/components/Forms/HCSelectInput";
import HCFullScreenModal from "@/components/Shared/HCModal/HCFullScreenModal";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types/common";
import { modifyPayloads } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ( { open, setOpen }: TProps ) => {
    const [ createDoctor ] = useCreateDoctorMutation();
    const handleFormSubmit = async ( values: FieldValues ) => {
        values.doctor.experience = Number( values.doctor.experience );
        values.doctor.apointmentFee = Number( values.doctor.apointmentFee );
        const data = modifyPayloads( values );
        try {
            const res = await createDoctor( data ).unwrap();
            console.log( res );
            if ( res?.id ) {
                toast.success( "Doctor created successfully!!!" );
                setOpen( false );
            }
        } catch ( err: any ) {
            console.error( err );
        }
    };

    const defaultValues = {
        doctor: {
            email: "",
            name: "",
            contactNumber: "",
            address: "",
            registrationNumber: "",
            gender: "",
            experience: 0,
            apointmentFee: 0,
            qualification: "",
            currentWorkingPlace: "",
            designation: "",
            profilePhoto: "",
        },
        password: "",
    };

    return (
        <HCFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
            <HCForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.name"
                            label="Name"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.email"
                            type="email"
                            label="Email"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.contactNumber"
                            label="Contract Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.address"
                            label="Address"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.registrationNumber"
                            label="Registration Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.experience"
                            type="number"
                            label="Experience"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCSelectInput
                            items={Gender}
                            name="doctor.gender"
                            label="Gender"
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.apointmentFee"
                            type="number"
                            label="ApointmentFee"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.qualification"
                            label="Qualification"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.currentWorkingPlace"
                            label="Current Working Place"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, sm: 12, xs: 12 }}>
                        <HCInputs
                            name="doctor.designation"
                            label="Designation"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>

                <Button type="submit">Create</Button>
            </HCForm>
        </HCFullScreenModal>
    );
};

export default DoctorModal;

