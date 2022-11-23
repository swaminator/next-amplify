// import {
//     Image
//   } from '@aws-amplify/ui-react';
  import Image from 'next/image'
  import {Storage} from 'aws-amplify'; 
  import { useEffect, useState } from 'react';

  const listFiles = async () => {
    const files = await Storage.list('photos/') // for listing ALL files without prefix, pass '' instead
    let signedFiles = files.results.map(f => Storage.get(f.key))
    signedFiles = await Promise.all(signedFiles)
    console.log('signedFiles: ', signedFiles)
    return signedFiles
  }

  const CardList =  () => {
  const [data,updateData] = useState();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await listFiles();
      updateData(data)
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])

  
    console.log(data);
    return (
      <>
        {
          data && data.map((file, i) => (
            i!=0 && <Image
              // id={i}
              loader={ () => file}
              src={file}
              width = {500}
              height= {300}
            />
          )) 
        }
      </>
    );
  };

  export default CardList;