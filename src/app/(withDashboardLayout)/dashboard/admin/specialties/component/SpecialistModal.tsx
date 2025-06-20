"use client"
import HCFileUploader from "@/components/Forms/HCFileUploader"
import HCForm from "@/components/Forms/HCForm"
import HCInputs from "@/components/Forms/HCInputs"
import HCModal from "@/components/Shared/HCModal/HCModal"
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi"
import { modifyPayloads } from "@/utils/modifyPayload"
import { Box, Button, Grid } from "@mui/material"
import React from "react"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"

export type TProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SpecialistModal = ( { open, setOpen }: TProps ) => {
    const [ createSpecialty ] = useCreateSpecialtyMutation();

    const handleFormSubmit = async ( values: FieldValues ) => {

        const data = modifyPayloads( values )
        try {
            const res = await createSpecialty( data ).unwrap();
            if ( res?.id ) {
                toast.success( "Speciality created successfully!!" );
                setOpen( false )
            }

        } catch ( error ) {

        }

    }
    return (
        <Box>
            <HCModal open={open} setOpen={setOpen} title={"Create a new speciality"} >
                <HCForm onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                        <Grid size={{ md: 6, sm: 12 }}>
                            <HCInputs name="title" label="Title"></HCInputs>
                        </Grid>
                        <Grid size={{ md: 6, sm: 12 }}>
                            <HCFileUploader name="file" label="Upload file" />
                        </Grid>
                    </Grid>
                    <Button sx={{ mt: 1 }} type="submit">Create</Button>
                </HCForm>
            </HCModal>
        </Box>
    )
}

export default SpecialistModal
