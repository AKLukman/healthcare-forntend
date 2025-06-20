"use client"
import { Box, Button, Stack, TextField } from "@mui/material"
import SpecialistModal from "./component/SpecialistModal"
import { useState } from "react"
import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Image from "next/image"
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "sonner"

// const paginationModel = { page: 0, pageSize: 5 };


const SpecialtiesPage = () => {
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>( false )
    const { data, isLoading } = useGetAllSpecialtiesQuery( {} )
    const [ deleteSpecialty ] = useDeleteSpecialtyMutation()
    const handleDelete = async ( id: string, title: string ) => {
        try {
            const res = await deleteSpecialty( id ).unwrap();
            if ( res?.id ) {
                toast.success( `${ title } deleted successfully!` )
            }

        } catch ( error: any ) {
            console.log( error.message )
        }

    }
    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 400 },
        {
            field: 'icon',
            headerName: 'Icon',
            flex: 1,
            renderCell: ( { row } ) => {
                return (
                    <Box>
                        <Image src={row.icon} height={30} width={30} alt="icon"></Image>
                    </Box>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ( { row } ) => {
                return (
                    <Button onClick={() => handleDelete( row.id, row.title )} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                )
            }
        },

    ];

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsModalOpen( true )}>Create Specialty</Button>
                <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField size="small" placeholder="Search Specialty"></TextField>
            </Stack>
            <Box my={2}>
                {
                    !isLoading ? (
                        <Paper sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={data}
                                columns={columns}
                                hideFooter={true}
                                // initialState={{ pagination: { paginationModel } }}
                                // pageSizeOptions={[ 5, 10 ]}
                                // checkboxSelection
                                sx={{ border: 0 }}
                            />
                        </Paper>
                    ) : (
                        <h1>Loading....</h1>
                    )
                }
            </Box>
        </Box>
    )
}

export default SpecialtiesPage
