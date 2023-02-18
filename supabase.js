const supabaseUrl = 'https://fjwozjoraqhycgkmhcev.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqd296am9yYXFoeWNna21oY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNzk4MzEsImV4cCI6MTk5MDc1NTgzMX0.vHYGILMJnRVronSHv3T1uWKbPnt-FJp3mJZ1u5-x5No'
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

const getData = async () => {
    const { data, error } = await supabaseClient
        .from('responses')
        .select('*')
}

const submitVisitorInfo = async (name, email) => {
    const { data, error } = await supabaseClient
        .from('responses')
        .insert({ visitor_name: name, email })
        .select()
    data && localStorage.setItem('currentUser', JSON.stringify(data[0]))
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'))
}

const updateHighlights = async (entry) => {

    const { error } = await supabaseClient
        .from('responses')
        .update({ highlights: entry })
        .eq('id', getCurrentUser().id)
}

const updateConnectionsExchanges = async (entry) => {

    const { error } = await supabaseClient
        .from('responses')
        .update({ connectionsExchanges: entry })
        .eq('id', getCurrentUser().id)
}

const updateKerfuffles = async (entry) => {

    const { error } = await supabaseClient
        .from('responses')
        .update({ kerfuffles: entry })
        .eq('id', getCurrentUser().id)
}

const updateVision = async (entry) => {

    const { error } = await supabaseClient
        .from('responses')
        .update({ vision: entry })
        .eq('id', getCurrentUser().id)
}
