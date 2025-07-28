import { MongoClient }  from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    const sourceUri = process.env.MONGODB_URI!;
    const destinationUri = process.env.MONGODB_BACKUP_URI_6H!;

    const sourceDbName = 'schoolPortal';
    const destinationDbName = 'backup-6h';

    const sourceClient = new MongoClient(sourceUri);
    const destinationClient = new MongoClient(destinationUri);

    try {
        await sourceClient.connect()
        await destinationClient.connect()

        const sourceDb = sourceClient.db(sourceDbName);
        const destinationDb = destinationClient.db(destinationDbName);

        const collections = await sourceDb.listCollections().toArray();

        for (const {name} of collections) {
            const sourceCol = sourceDb.collection(name)
            const destinationCol = destinationDb.collection(name);

            const docs = await sourceCol.find({}).toArray();

            await destinationCol.deleteMany({});
            if (docs.length > 0) {
                await destinationCol.insertMany(docs)
            }
        }

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ success: false, error: err }, {status: 500 })
    } finally {
        await sourceClient.close()
        await destinationClient.close()
    }
}