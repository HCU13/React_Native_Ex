import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {useCameraDevices, Camera} from 'react-native-vision-camera';

const ScannerScreen = () => {
  const [permissions, setPermissions] = useState();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(() => {
      setPermissions(true);
    });
  }, []);

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices['front'];
  
 
  if (!device || !permissions) {

    return null
    
  }

  return (
    
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
   
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({});
