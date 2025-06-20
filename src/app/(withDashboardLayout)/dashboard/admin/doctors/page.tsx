/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Box, Button, Paper, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import DoctorModal from './components/DoctorModal'
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from '@/redux/api/doctorApi'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'sonner'
import { useDebounced } from '@/redux/hooks'


const DoctorsPage = () => {
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>( false )
    const query: Record<string, any> = {};
    const [ searchTerm, setSearchTerm ] = useState<string>( "" )
    const debouncedTerm = useDebounced( { searchQuery: searchTerm, delay: 600 } )
    if ( !!debouncedTerm ) {
        query[ "searchTerm" ] = searchTerm
    }

    const { data, isLoading } = useGetAllDoctorsQuery( { ...query } );
    const [ deleteDoctor ] = useDeleteDoctorMutation()
    const doctors = data?.doctors;
    const meta = data?.meta;
    const handleDelete = async ( id: string, name: string ) => {
        try {
            const res = await deleteDoctor( id ).unwrap();
            if ( res?.id ) {
                toast.success( `Dr. ${ name } deleted successfully!` )
            }

        } catch ( error: any ) {
            console.log( error.message )
        }

    }
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'contactNumber', headerName: 'Contact Number', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ( { row } ) => {
                return (
                    <Button onClick={() => handleDelete( row.id, row.name )} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                )
            }
        },

    ];
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsModalOpen( true )}>Create New Doctor</Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField onChange={( e ) => setSearchTerm( e.target.value )} size="small" placeholder="Search Doctor"></TextField>
            </Stack>
            <Box my={2}>
                {
                    !isLoading ? (
                        <Paper sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={doctors}
                                columns={columns}
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

export default DoctorsPage
