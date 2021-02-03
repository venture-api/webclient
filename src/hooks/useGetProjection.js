import { useEffect, useState } from 'react';
import { gate } from '../index';
import { keys } from '../dictionary';


export default function useGetProjection({ trigger, collection, query, cmd='findOne' }) {

    const mongodb = gate.currentUser.mongoClient(keys.atlasCluster);
    const [ response, setResponse ] = useState(null);
    const [ inProgress, setInProgress ] = useState(false);

    useEffect(() => {

        async function performCall() {

            try {
                setInProgress(true);
                const projection = await mongodb.db(keys.projectionDB).collection(collection)[cmd](query);
                setResponse(projection);

            } catch (error) {
                console.error(error);
            } finally {
                setInProgress(false);
            }
        }

        if (trigger && ! inProgress)
            performCall();

    }, [ collection, query, trigger, inProgress ]);

    return response;
}
