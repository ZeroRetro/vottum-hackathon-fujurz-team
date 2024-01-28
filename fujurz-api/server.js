const express = require('express');
const appRoutes = require('./routes/appRoutes');

const app = express();
app.use(express.json());

app.use('/api', appRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
