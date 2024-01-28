const express = require('express');
const appRoutes = require('./routes/appRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use('/api', appRoutes);

app.use(cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
