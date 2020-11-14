import React from 'react'
import { Grid, Avatar, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { mockFeed } from './../../../utils/mock'
import { NewsCard, PostCard, Wrapper } from './../../../components/dashboard'

export const DStudentHome = () => {
    return (
        <Wrapper>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={8}>
                    <Paper className="table-responsive">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Project</TableCell>
                                    <TableCell>Due Date</TableCell>
                                    <TableCell>Current Progress</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Nombre
                                    </TableCell>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Hi</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <NewsCard subtitle="Last updated 24 mins ago" feed={mockFeed} />
                </Grid>

                <Grid item sm={12} md={6}>
                    <PostCard
                        title="Shrimp and Chorizo Paella"
                        subtitle="Yesterday"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={200}
                        text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
                        avatar={
                            <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                                RL
                            </Avatar>
                        }
                    />
                </Grid>
            </Grid>
        </Wrapper>
    )
}