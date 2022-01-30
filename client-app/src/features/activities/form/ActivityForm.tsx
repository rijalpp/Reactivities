import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from 'mobx-react-lite';


export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input plceholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea plceholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input plceholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input type="date" plceholder='Date' value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input plceholder='City' value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input plceholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button loading={loading} floated="right" positive type='Submit' content='Submit' />
                <Button onClick={closeForm} floated="right" type='Button' content='Cancel'/>
            </Form>
        </Segment>
    )
})