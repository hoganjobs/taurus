import db from '@/plugins/leancloud'

export const getProduct = () => {
    const query = new db.Query('Product')
    // query.include('image');
    // query.descending('createdAt');
    return query.find()
}
