import React, {useState} from 'react';
import {View, Text, StyleSheet,  TouchableOpacity, Platform,PermissionsAndroid} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob'



const RN_FS = () => {
  const [isLoading, setIsloading] = useState(false);



function download () {
     //
   const urlDownload = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
        
               const filePath = RNFS.DownloadDirectoryPath  + '/FS_test_1.pdf';
                // const dirs = `/storage/emulated/0/Download`;
                // const downloadPath = `${RNFS.CachesDirectoryPath}/testRNFS.pdf`;


                // upload files
                RNFS.downloadFile({
                fromUrl: urlDownload,
                toFile: filePath,
                 background: true,
                headers: {
                    'Accept': 'application/json',
                },
                begin: downloadBegin,
                progress: downloadProgress

                }).promise.then((response) => {
                    if (response.statusCode == 200) {
                    console.log('FILES DOWNLOADED!', response); // response.statusCode, response.headers, response.body
                    
                    console.log('PATH', filePath)
                    } else {
                    console.log('SERVER ERROR');
                    }
                })
                .catch((err) => {
                    if(err.description === "cancelled") {
                    // cancelled by user
                    }
                    console.log(err);
                });
}


const downloadBegin = (response) => {
  var jobId = response.jobId;
  console.log('DOWNLOAD HAS BEGUN! JobId: ' + jobId);
};

const downloadProgress = (response) => {
  var percentage = Math.floor((response.bytesWritten/response.contentLength) * 100);
  console.log('DOWNLOAD IS ' + percentage + '% DONE!');
};






 function BlobDownloadFile () {

    const pdfUrl = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';

    const dirs = RNFetchBlob.fs.dirs;
    const filePath = dirs.DownloadDir + '/test_new_4.pdf';
    const iosPath = dirs.DocumentDir +'/test_new_4.pdf';
    let options = {
            fileCache: false,
            appendExt : 'pdf',
            path: Platform.OS === 'android' ? filePath : iosPath,

            // addAndroidDownloads : {
            //  path: Platform.OS === 'android' ? filePath : iosPath,
            // useDownloadManager : true,
            // notification : true,
            // mediaScannable: true,
            // description : '',
            // mime: '/'
            //  }
        }

        //
        RNFetchBlob.config(options)
            .fetch(
                'GET',
                pdfUrl,
                {
                    'Content-Type' : 'application/json'
                },
            
             )
            .progress({ count : 10 }, (received, total) => {
                // console.log('progress', received / total)
            })
            .then((res) => {
                //
                console.log('Downloaded', res.path() ) ;  
            })
            .catch((err) => {
                // error handling
                console.log('Error', err) ;   
            })


            
}


function blodDownLoad_2() {
    const pdfUrl = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
    let dirs = RNFetchBlob.fs.dirs;
        RNFetchBlob
        .config({
            // response data will be saved to this path if it has access right.
            path : dirs.DownloadDir + '/path-to-file_new.pdf'
        })
        .fetch('GET', pdfUrl, {
            //some headers ..
        })
        .then((res) => {
            // the path should be dirs.DocumentDir + 'path-to-file.anything'
            console.log('The file saved to ', res.path())
        })
        .catch((err) => {
                        // error handling
                        console.log('Error', err) ;   
                    })

        }



   async function checkPermission () {
    try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use to write external storage");

        // blodDownLoad_2();
        // BlobDownloadFile();
        download();

    } else {
      console.log("external storage permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
    

        //
        return (
            
            <View style={{alignItems:'center', marginTop:100}}>

            <TouchableOpacity style={{height: 50, width: 200, backgroundColor:'pink', justifyContent:'center',
                alignItems:'center',}} onPress={checkPermission}>
                <Text>'TEST RN FS'</Text>
            </TouchableOpacity>
                
            </View>
            
        );
};


//
const styles = StyleSheet.create({
    
});

export default RN_FS;
