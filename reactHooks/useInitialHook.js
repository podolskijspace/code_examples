const useInitialHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const init = async () => {
    try {
      setLoading(true);

      const data = api.getData("url");

      if (isUnmount) {
        return
      }
      setData(data);
    } catch(e) {
      setError(e);
    } finally {
      if (!isUnmount) {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    init();
  }, [])

  return {data, loading, error};
}

const Comp = () => {
  const {data, loading, error} = useInitialHook();

  return (
    <div>
      {/*renderProducts */}
    </div>
  )
}
