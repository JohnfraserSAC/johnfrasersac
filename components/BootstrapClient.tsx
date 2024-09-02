// IMPORTING BOOTSTRAP
"use client"

import { useEffect } from 'react';

export const BootstrapClient = () => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
};

export default BootstrapClient;