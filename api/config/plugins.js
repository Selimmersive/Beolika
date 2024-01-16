module.exports = ({ env }) => ({
  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: "5bast42te1wx7ffdu34lm7bkoxg0gtso1ars25i2n2t6hjd53c87lqgbmz3rhkie", 
      neonProjectName: "Themify",
      neonRole: "beolika", 
    }
  },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });