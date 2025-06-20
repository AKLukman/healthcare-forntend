import HCDatePicker from "@/components/Forms/HCDatePicker";
import HCForm from "@/components/Forms/HCForm"
import HCModal from "@/components/Shared/HCModal/HCModal"
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";


type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ( { open, setOpen }: TProps ) => {
    const handleSubmit = async ( values: FieldValues ) => {
        console.log( values )

    }
    return (
        <HCModal open={open} setOpen={setOpen} title="Create Schedule">
            <HCForm onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ width: "400px" }}>
                    <Grid size={{ md: 12 }}>
                        <HCDatePicker name="startDate" label="Start Date" fullWidth={true}></HCDatePicker>
                    </Grid>
                    <Grid size={{ md: 12 }}>
                        <HCDatePicker name="endDate" label="End Date" fullWidth={true}></HCDatePicker>
                    </Grid>
                </Grid>
                <Button sx={{ mt: 2 }} type="submit">Create</Button>

            </HCForm>
        </HCModal>
    )
}

export default ScheduleModal
