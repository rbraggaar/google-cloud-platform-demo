# Reverse proxy with multiple upstream failover endpoints

Docker image running nginx which loads it's config from a $CONFIG enviroment variable. 
This allows for quick edits and iterative config development in Cloud Run without rebuilding a new Docker image each time.