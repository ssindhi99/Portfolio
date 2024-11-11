// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://671bc84e2c842d92c38149ba.mockapi.io/project/' }),
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => `projects/`,
      providesTags: ['Project'],
      refetchOnFocus: true,     // Automatically refetch on focus
      refetchOnReconnect: true, // Automatically refetch on reconnect
    }),
    addNewProject: builder.mutation({
      query: (newProject) => ({
        url: 'projects/',
        method: 'POST',
        body: newProject,
      }),
      invalidatesTags: ['Project'],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `projects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),
    editProject: builder.mutation({
      query: ({ id, project }) => ({
        url: `projects/${id}`,
        method: 'PUT',
        body: project,
      }),
      invalidatesTags: ['Project'],
    }),
    getAllContactform: builder.query({
      query: () => `contactus/`,
      providesTags: ['Project'],
    }),
    addNewContactform: builder.mutation({
      query: (newContact) => ({
        url: 'contactus/',
        method: 'POST',
        body: newContact,
        refetchOnFocus: true,    
        refetchOnReconnect: true,
  
      }),
      invalidatesTags: ['Project'],
    }),
    deleteContactform: builder.mutation({
      query: (id) => ({
        url: `contactus/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),
    editContactform: builder.mutation({
      query: ({ id, contact }) => ({
        url: `contactus/${id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Project'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProjectsQuery,
  useAddNewProjectMutation,
  useDeleteProjectMutation,
  useEditProjectMutation,
  useGetAllContactformQuery,
  useAddNewContactformMutation,
  useDeleteContactformMutation,
  useEditContactformMutation,
} = projectApi;
